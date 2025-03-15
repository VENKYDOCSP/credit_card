'use client';
import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'

const Redirect = () => {
    useEffect(() => {
        redirect('/credit-cards')
    })
    return (
        <div>

        </div>
    )
}

export default Redirect
