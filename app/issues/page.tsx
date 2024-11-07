import React from 'react';
import { Button } from '@radix-ui/themes';
import Link from 'next/link';

const IssuesPage = () => {
  return (
    <div>
      <h1 className="mb-2 font-bold text-xl">Issues Page</h1>
      <Button><Link href="/issues/new">New Issue</Link></Button>
    </div>
  )
}

export default IssuesPage