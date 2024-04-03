import React from 'react'
import { Button } from '@/components/ui/button'
import DataTable from './components/Table';
import { useQuery } from 'react-query';
import { ApiClient } from '@/features/api';
import { useNotification } from 'react-hook-notification';
import { useLocation } from 'react-router-dom';
import { AxiosError } from 'axios';
function History() {


    const serial = JSON.parse(useLocation().state).original.serial;
    const getHistory = async () => {
        try {
            const result = await ApiClient.get(`/history`, {
                params: {
                    serial
                }
            })
            return result.data;
        } catch (error) {
            console.log(error.response);
            return [];
        }
    }
    const { data, isLoading } = useQuery({
        queryFn: getHistory,
        queryKey: [serial],
        initialData: [],
        refetchInterval: 2000
    });

    return (
        <div className='m-6'>
            <div className='px-12'>
                <DataTable data={data} />
            </div>
        </div>
    )
}

export default History