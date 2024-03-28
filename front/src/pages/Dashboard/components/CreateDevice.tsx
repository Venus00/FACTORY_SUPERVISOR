import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

type Props = {
    onSubmit: (serial: string) => void
}
export default function CreateDevice(props: Props) {
    const [serial, setSerial] = useState('');
    return (
        <Card className="">
            <CardHeader>
                <CardTitle>Create Device</CardTitle>
                <CardDescription>ADD Device Credentials</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5 w-64">
                            <Label htmlFor="name">Serial</Label>
                            <Input id="name" value={serial} onChange={(e) => { setSerial(e.target.value) }} placeholder="device serial" />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button onClick={() => props.onSubmit(serial)}>ADD</Button>
            </CardFooter>
        </Card>
    )
}