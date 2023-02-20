import styles from './styles.module.scss'
import { BiUser } from 'react-icons/bi'
import { SiMinutemailer } from 'react-icons/si'
import { IoKeyOutline } from 'react-icons/io5'
import { useField } from 'formik'



export default function LoginInput({ icon, placeholder, ...props }) {
  const [field, meta] = useField()
  return (
    <div className={styles.input}>
      {icon == "user" ? (
        <BiUser />
      ) : icon == "email" ? (
        <SiMinutemailer />
      ) : icon == "password" ? (
        <IoKeyOutline />
      ) : (
        ""
      )}
      <input
        type={field.type}
        name={field.name}
        placeholder={placeholder}
        {...field}
        {...props}
      />
    </div>
  )
}
