import React from 'react'
import Sidebar from '@/components/ui/dialogs/Sidebar'


export default function LayoutUI({ children }) {
  return (
    <div style={{display:"flex", width:"95vw"}}>
    <div style={{width:"40%"}}>
        <Sidebar />
    </div>
    <main style={{width:"60%"}}>
      {children}
    </main>
</div>
  )
}