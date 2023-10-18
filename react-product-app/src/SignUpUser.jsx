import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function SignUpUser() {
  const { handleSubmit, control, formState, setError, getValues } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', {
        type: 'manual',
        message: 'Passwords do not match',
      });
      return;
    }

    alert(JSON.stringify(data, null, 2));
    console.log(data);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: 'Pease enter your first name' }}
            render={({ field, fieldState }) => (
              <input {...field} placeholder="First Name" />
            )}
          />
          {formState.errors.firstName && <p>{formState.errors.firstName.message}</p>}
        </div>
        <div>
          <label>Last Name</label>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: 'Please enter your last name' }}
            render={({ field, fieldState }) => (
              <input {...field} placeholder="Last Name" />
            )}
          />
          {formState.errors.lastName && <p>{formState.errors.lastName.message}</p>}
        </div>
        <div>
          <label>User Name</label>
          <Controller
            name="userName"
            control={control}
            rules={{ required: 'Please enter your username' }}
            render={({ field, fieldState }) => (
              <input {...field} placeholder="User Name" />
            )}
          />
          {formState.errors.userName && <p>{formState.errors.userName.message}</p>}
        </div>
        <div>
          <label>Email</label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Please enter your E-mail',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email format',
              },
            }}
            render={({ field, fieldState }) => (
              <input {...field} placeholder="Email" />
            )}
          />
          {formState.errors.email && <p>{formState.errors.email.message}</p>}
        </div>
        <div>
          <label>Password</label>
          <Controller
            name="password"
            control={control}
            rules={{ required: 'Password is missing' }}
            render={({ field, fieldState }) => (
              <input {...field} type="password" placeholder="Password" />
            )}
          />
          {formState.errors.password && <p>{formState.errors.password.message}</p>}
        </div>
        <div>
          <label>Confirm Password</label>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{ required: 'Must confirm' }}
            render={({ field, fieldState }) => (
              <input {...field} type="password" placeholder="Confirm Password" />
            )}
          />
          {formState.errors.confirmPassword && <p>{formState.errors.confirmPassword.message}</p>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpUser;
