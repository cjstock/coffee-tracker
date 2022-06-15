import { useContext, useState } from "react";
import { Button, Form, Input, Option, Select } from "react-daisyui"
import { AppContext } from "../../app/AppContext";

export default function EditBean() {

    const appContext = useContext(AppContext);

    return <>
        <div className={`z-50 fixed bg-secondary ${appContext.editBean ? "visible" : "invisible"}`}>
            <Form>
                <Input type="text" placeholder="Country"/>
                <Input type="text" placeholder="Region" />
                <Select>
                    <option value={1} key={1}>Washed</option>
                    <option value={2} key={2}>Natural</option>
                </Select>
                <Button>Edit</Button>
            </Form>
        </div>
    </>
}