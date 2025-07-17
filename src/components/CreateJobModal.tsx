'use client';

import {
  Button,
  Modal,
  TextInput,
  Select,
  Group,
  Textarea,
} from '@mantine/core';
import { useForm, Controller } from 'react-hook-form';

export interface CreateJobFormValues {
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  salaryFrom: string;
  salaryTo: string;
  deadline: string;
  description: string;
}


export default function CreateJobModal({
  opened,
  onClose,
  onCreate,
}: {
  opened: boolean;
  onClose: () => void;
  onCreate: (job: CreateJobFormValues) => void;
}) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<CreateJobFormValues>();

  const handleCreate = (data: CreateJobFormValues) => {
    onCreate(data);
    reset();
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Create Job Opening"
      centered
      size="lg"
      classNames={{ title: 'w-full text-center font-bold ' }}
    >
      <form onSubmit={handleSubmit(handleCreate)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput
            label="Job Title"
            {...register('title', { required: 'Job Title is required' })}
            error={errors.title?.message}
            required
          />

          <TextInput
            label="Company Name"
            {...register('company', { required: 'Company Name is required' })}
            error={errors.company?.message}
            required
          />

          <TextInput
            label="Location"
            {...register('location', { required: 'Location is required' })}
            error={errors.location?.message}
            required
          />

          <Controller
            name="type"
            control={control}
            rules={{ required: 'Job type is required' }}
            render={({ field, fieldState }) => (
              <Select
                label="Job Type"
                data={['Full-time', 'Part-time', 'Contract', 'Internship']}
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?.message}
                placeholder="Select type"
                required
              />
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    
          <div>
            <label className="text-sm font-medium text-gray-700">
              Salary Range
            </label>
            <div className="flex gap-4 mt-1">
              <TextInput
                placeholder="₹0"
                {...register('salaryFrom', {
                  required: 'From salary is required',
                })}
                error={errors.salaryFrom?.message}
              />
              <TextInput
                placeholder="₹12,00,000"
                {...register('salaryTo', {
                  required: 'To salary is required',
                })}
                error={errors.salaryTo?.message}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Application Deadline
            </label>
            <TextInput
              type="date"
              className="mt-1"
              {...register('deadline', { required: 'Deadline is required' })}
              error={errors.deadline?.message}
            />
          </div>
        </div>

        <Textarea
          label="Job Description"
          placeholder="Please share a description to let the candidate know more about the job role"
          {...register('description', { required: 'Description is required' })}
          error={errors.description?.message}
          autosize={false}
          rows={6}
          required
        />

        <Group justify="space-between" mt="md">
          <Button variant="default" onClick={onClose}>
            Save Draft
          </Button>
          <Button type="submit">Publish</Button>
        </Group>
      </form>
    </Modal>
  );
}
