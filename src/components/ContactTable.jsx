import React from 'react'
import { Button, Table } from '@mantine/core';
import Cookies from 'js-cookie';
import { useGetContactsQuery } from '../features/api/contactApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToFav } from '../features/services/favSlice';

const ContactTable = () => {
    const nav=useNavigate();
    const token = Cookies.get("token");
    const { data } = useGetContactsQuery(token);
    console.log(data);


    const dispatch = useDispatch();
    const favHandler = (contact) => {
        console.log(contact);
        // setClicked(null);
        dispatch(addToFav(contact));
      };

    return (
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>

            <tbody>
                {data?.contacts?.data.map(
                    (contact) => {
                        return (
                            <tr key={contact?.id}>
                                <td>{contact.name}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.email}</td>
                                <td>  {contact.address}</td>  
                               
                                  <tr><td  className='cursor-pointer' onClick={() => nav(`/edit/${contact.id}`)}>edit</td></tr>
                                  <tr><td className='cursor-pointer' onClick={() => favHandler(contact)} > fav</td></tr>
                            </tr>
                        )
                    }
                )}
        </tbody>
        </Table>

    )
}

export default ContactTable