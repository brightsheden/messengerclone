// @flow strict

import { Card, CardContent, Typography } from '@material-ui/core';
import React,{forwardRef} from 'react';
import './message.css'

const  Messages= forwardRef(({message,username},ref ) =>{
    const isUser = username === message.username
    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser? 'message_userCard': "message_guestCard" }>
                <CardContent>
                    <Typography
                    color="intial"
                    variant='h5'
                    component='h2'
                    >{ !isUser && `${message.username || 'unknown user'}:`} {message.message}
                    </Typography>
                </CardContent>
            </Card>
       
        </div>
         
          
        
    );
});

export default Messages;