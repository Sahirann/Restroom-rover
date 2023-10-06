import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, makeStyles } from '@mui/material';
import styles from "./writeinfo.js";



export default function FormPropsTextFields() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh',justifyContent: 'flex-start' }}>
            <h2>Sending Report</h2>
            <Box
                // component="form"
                sx={{
                      m: 3 ,
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        required
                        label="Title"
                        // defaultValue="Title"
                        fullWidth
                        rows={1}
                        multiline
                        margin="normal"
                    />
                    <TextField
                        required
                        label="Information"
                        // defaultValue="Information"
                        fullWidth
                        rows={6}
                        multiline
                        margin="normal"
                    />
                </div>
            </Box>
            <div className='btn'>
            <Button >Submit</Button>
            </div>
        </div>

    );
}
