'use client'

import { TextArea, TextField, Button, Callout, Text } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/createIssueSchema';
import { z } from 'zod';

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema)
  });
  const [error, seterror] = useState('');

  return (
    <div className="max-w-xl">
      {error && <Callout.Root color="red" className="mb-3">
          <Callout.Text>
            {error}
          </Callout.Text>
        </Callout.Root>}
      <form className='space-y-3' onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post('/api/issues', data);
          router.push('/issues');
        } catch (error) {
          seterror('An unexpected error occured.');
          throw error; // rethrow the error
        }
      })}>
          <TextField.Root placeholder="Title" {...register('title')}>
          </TextField.Root>
          {errors.title && <Text color="red" as="p">{errors.title.message}</Text>}
          <TextArea placeholder="Description" {...register('description')}/>
          {errors.description && <Text color="red" as="p">{errors.description.message}</Text>}
          <Button>Submit New</Button>
      </form>
    </div>
  )
}

export default NewIssuePage