import React, { useState } from 'react'
import { Button, Card, CardContent, TextField, Typography } from '@mui/material'

export const UserLogin = ({ handleLogin }) => {
  const [name, setName] = useState('')

  return (
    <Card className="rounded-md">
      <CardContent className="flex flex-col justify-center">
        <Typography variant="h4" textAlign="center" className="pb-2">
          Login
        </Typography>
        <TextField
          label="username"
          placeholder="enter username"
          size="small"
          className="mt-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <Button
          variant="contained"
          className="bg-blue-600"
          onClick={() => handleLogin(name)}
        >
          Join Chat
        </Button>
      </CardContent>
    </Card>
  )
}
