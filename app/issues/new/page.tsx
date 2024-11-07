'use client'

import { TextArea, TextField, Button, Callout } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const {register, handleSubmit} = useForm<IssueForm>();
  const [error, seterror] = useState('');

  return (
    <div className="max-w-xl">
      {error && <Callout.Root color="red" className="mb-3">
          <Callout.Text>
            {error}
          </Callout.Text>
        </Callout.Root>}
      <form className='space-y-3' 
      onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post('/api/issues', data);
          router.push('/issues');
        } catch (error) {
          seterror('An unexpected error occured.');
        }
      })}>
          <TextField.Root placeholder="Title" {...register('title')}>
          </TextField.Root>
          <TextArea placeholder="Description" {...register('description')}/>
          <Button>Submit New</Button>
      </form>
    </div>
  )
}

export default NewIssuePage