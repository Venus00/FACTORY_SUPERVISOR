import React from 'react'
import { Button } from '@/components/ui/button'
import DataTable from './components/Table';
import { useQuery } from 'react-query';
import { ApiClient } from '@/features/api';
import CreateDevice from './components/CreateDevice';
import { useNotification } from 'react-hook-notification';
function Dashboard() {
    const notification = useNotification();
    const getDevices = async () => {
        try {
            let result = await ApiClient.get('/device')
            console.log(result);
            result.data.sort((a, b) => a.id < b.id)
            return result.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
    const { data, isLoading } = useQuery({
        queryFn: getDevices,
        queryKey: ['devices'],
        initialData: [],
        refetchInterval: 2000,
    });

    const onSubmit = async (serial) => {
        try {
            notification.success({
                text: 'Device Created Succefully',
                delay: 2000
            })
            const result = await ApiClient.post('/device', {
                serial
            });
            console.log(result.data);
        } catch (error) {
            console.log(error.data)
        }
    }
    return (
        <div className='m-16'>
            <div className='px-12 '>
                <CreateDevice onSubmit={onSubmit} />
            </div>

            <div className='px-12'>
                <DataTable data={data} />
            </div>
        </div>
    )
}

export default Dashboard