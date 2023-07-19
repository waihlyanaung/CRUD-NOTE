import React from 'react'
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box } from '@mantine/core';
import { useCreateContactMutation } from '../features/api/contactApi';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const CreateContact = () => {
  const [createContact] = useCreateContactMutation();
  const token = Cookies.get("token")
  const nav=useNavigate();
  const form = useForm({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      address: '',
    },
  });
  return (
    <Box maw={320} mx="auto">
      <form onSubmit={form.onSubmit(async (values) => {
        const data = await createContact({ token, data: values });
        console.log(data);
        if(data?.success){
          nav('/')}
      })}>
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput label="Phone" placeholder="Phone" {...form.getInputProps('phone')} />
      <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />
      <TextInput label="Address" placeholder="Address" {...form.getInputProps('address')} />

      <Group position="center" mt="xl">
        <Button variant="outline" type="submit" >
          Create
        </Button>
      </Group>
      </form>
    </Box >
  )
}

export default CreateContact