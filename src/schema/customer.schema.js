import {z} from 'zod';

const customerSchema = z.object({
  name: z.string().min(3, 'Username id required').max(30),
  email: z.string().email('Invalid email'),
  document: z.string().min(11, 'Document ID must be at least 11 characters long'),
  streetAddress: z.string().min(5, 'Street adress id required').max(100),
  city: z.string().min(3, 'City id required').max(30),
  state: z.string().min(2, 'State id required').max(30),
  eircode: z.string().min(7, 'Eircode required').max(7),
  phoneNumber: z.string().min(9, 'Phone number required').max(9),
})

export { customerSchema }
