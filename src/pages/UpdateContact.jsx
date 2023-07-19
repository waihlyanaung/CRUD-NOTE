import React, { useEffect, useState } from 'react'
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box } from '@mantine/core';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSingleContactQuery, useUpdateContactMutation } from '../features/api/contactApi';
const UpdateContact = () => {
    const { id } = useParams();
    const token = Cookies.get("token");
    const { data } = useSingleContactQuery({ token, id });
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    
    const [address, setAddress] = useState("");
    const [updateContact] = useUpdateContactMutation();
    console.log(data);


    useEffect(() => {
        if (data) {
          setName(data?.contact?.name);
          setEmail(data.contact.email);
          setPhone(data.contact.phone);
        }
      }, [data]);
      const submitHandler = async (e) => {
        e.preventDefault();
        // console.log(name, email, phone);
        const newData = { id: data?.contact?.id, name, phone, email, address };
        const { data: updatedData } = await updateContact({ token, newData });
        console.log(updatedData); // <-- Updated variable name
        // if (updatedData.success) {
        //   nav("/");
        // }
      };
    const form = useForm({
        // initialValues: {
        //   name: 'contact?.name',
        //   phone: '',
        //   email: '',
        //   address: '',
        // },
      });
  return (
    <Box maw={320} mx="auto">
      <form  onSubmit={submitHandler}>
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} defaultValue={data?.contact?.name} onChange={(e) => setName(e.target.value)} />
      <TextInput label="Phone" placeholder="Phone" {...form.getInputProps('phone')}  defaultValue={data?.contact?.phone}   onChange={(e) => setPhone(e.target.value)} />
      <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} defaultValue={data?.contact?.email}  onChange={(e) => setEmail(e.target.value)}/>
      <TextInput label="Address" placeholder="Address" {...form.getInputProps('address')} defaultValue={data?.contact?.address}  onChange={(e) => setAddress(e.target.value)} />

      <Group position="center" mt="xl">
        <Button variant="outline" type="submit" >
          Edit
        </Button>
      </Group>
      </form>
    </Box >
  )
}

export default UpdateContact