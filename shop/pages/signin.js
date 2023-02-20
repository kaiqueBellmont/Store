import Header from '../components/header'
import Footer from '../components/footer'
import LoginInput from '../components/inputs/loginInput/index'

import { BiLeftArrowAlt } from 'react-icons/bi'

import styles from "../styles/signin.module.scss"
import Link from 'next/link'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'

const initialValues = {
  login_email: "",
  login_password: "",
}


export default function signin() {
  const [user, setUser] = useState(initialValues);
  const { login_email, login_password } = user;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }
  const loginValidation = Yup.object({
    login_email: Yup.string()
      .required("Endereço de email requerido.")
      .email("Por favor, entre com um Email válido."),
    login_password: Yup.string()
      .required("Por favor, entre com uma senha")
  })
  return (
    <>
      <Header country={"Sexo"} />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              Estamos felizes em ter você conosco!
              <Link href="/"> Ir para Loja </Link>
            </span>
          </div>
          <div className={styles.login__form}>
            <h1>Entrar</h1>
            <p>
              Obtenha acesso ao melhor Shopping online do Brasil.
            </p>
            <Formik
              enableReinitialize
              initialValues={{
                login_email,
                login_password
              }}
              validationSchema={loginValidation}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="text"
                    name="login_email"
                    icon="email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    name="login_passsword"
                    icon="password"
                    placeholder="Senha"
                    onChange={handleChange}
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer country={"Barzil"} />

    </>
  )
}
