import {z} from 'zod';

const workerSchema = z.object({
  name: z.string().min(3, 'Username id required').max(30),
  email: z.string().email('Invalid email'),
  document: z.string().min(11, 'Document ID must be at least 11 characters long'),
  eircode: z.string().min(7, 'Eircode required').max(7),
  phoneNumber: z.string().min(9, 'Phone number required').max(9),
  //tools: z.string().max(200, 'tools field can have a maximum of 200 characters'),
})

export { workerSchema }