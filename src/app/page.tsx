import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='px-12 py-8'>
      <nav className='flex items-center justify-between rounded-full bg-white px-8 py-3 shadow-2xl'>
        <h3 className='text-xl font-medium'>To-do</h3>
        <div>
          <Button variant='outline' className='mr-3 rounded-full' size='lg'>
            Log in
          </Button>
          <Button className='rounded-full' size='lg'>
            Sign up
          </Button>
        </div>
      </nav>
      <div className='py-24 text-center'>
        <div className='my-8 text-7xl font-bold'>
          <span>Do all your work</span>
          <br />
          <span>in one place</span>
        </div>
        <p className='my-8 text-xl text-gray-500'>
          Discover how To-do can help you boost productivity and increase joy
        </p>
        <Button className='rounded-full px-18 py-8 text-2xl' size='lg'>
          Try To-do for free
        </Button>
      </div>
    </div>
  );
}
