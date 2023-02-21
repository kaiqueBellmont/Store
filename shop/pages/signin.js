import styles from "../styles/signin.module.scss"
import { useState } from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import LoginInput from '../components/inputs/loginInput/index'
import CircledIconBtn from '../components/buttons/circledIconBtn'

import { signIn, getProviders } from 'next-auth/react';

import Link from 'next/link'

import { AiOutlineArrowLeft } from 'react-icons/ai'

import { Formik, Form } from 'formik'

import * as Yup from 'yup'

const initialvalues = {
  login_email: "",
  login_password: "",
  name: "",
  email: "",
  password: "",
  conf_password: "",
  // success: "",
  // error: "",
  // login_error: "",
}


export default function signin({ providers }) {
  const [user, setUser] = useState(initialvalues);
  const {
    login_email,
    login_password,
    name,
    email,
    password,
    conf_password,
  } = user;

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

  const registerValidation = Yup.object({
    name: Yup.string()
      .required("Qual o seu nome?")
      .min(2, "O primeiro nome precisa ter entre 2 e 16 caracteres.")
      .max(16, "O primeiro nome precisa ter entre 2 e 16 caracteres.")
      .matches(/^[aA-zZ]/, "Números e caracteres especiais não são permitidos"),
    email: Yup.string()
      .required(
        "Você vai precisar desse email mais tarde. (para reset de senha também)"
      )
      .email("Entre com um email válido"),
    password: Yup.string()
      .required(
        "Entre com uma combinação de letras, numeros e caracteres especiais(como ! e &)."
      )
      .min(6, "A senha precisa ter no mínimo 6 caracteres.")
      .max(36, "A senha não pode ser maior que 36 caracteres"),
    conf_password: Yup.string()
      .required("Confirme seua senha.")
      .oneOf([Yup.ref("password")], "Senhas não conferem."),
  });

  return (
    <>
      <Header country={"Brazil"} />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <AiOutlineArrowLeft />
            </div>
            <span>
              Estamos muito felizes em ter você aqui! <br /> <Link href="/">»» Ir para a Loja ««</Link>
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
                    name="login_password"
                    icon="password"
                    placeholder="Senha"
                    onChange={handleChange}
                  />
                  <CircledIconBtn type="submit" text="Entrar" />
                  <div className={styles.forgot}>
                    <Link href="/forget">Esqueceu a senha?</Link>
                  </div>
                </Form>
              )}
            </Formik>
            <div className={styles.login__socials}>
              <span className={styles.or}>Ou Continue com</span>
              <div className={styles.login__socials_wrap}>
                {providers.map((provider) => (
                  <div key={provider.name}>
                    <button className={styles.social__btn} onClick={() => signIn(provider.id)}>
                      <img src={`../../icons/${provider.id}.png`} alt="" />
                      Entrar com {provider.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.login__container}>
          <div className={styles.login__form}>
            <h1>Cadastre-se</h1>
            <p>
              Obtenha acesso ao melhor Shopping online do Brasil.
            </p>
            <Formik
              enableReinitialize
              initialValues={{
                name,
                email,
                password,
                conf_password,
              }}
              validationSchema={registerValidation}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="text"
                    name="name"
                    icon="user"
                    placeholder="Nome e sobrenome"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="text"
                    name="email"
                    icon="email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    name="password"
                    icon="password"
                    placeholder="Senha"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    name="conf_password"
                    icon="password"
                    placeholder="Confirme a senha"
                    onChange={handleChange}
                  />
                  <CircledIconBtn type="submit" text="Cadastrar" />
                </Form>
              )}
            </Formik>

          </div>
        </div>
      </div>
      <Footer country={"Brazil"} />

    </>
  )
}

export async function getServerSideProps(context) {
  const providers = Object.values(await getProviders());
  return {
    props: {
      providers
    },
  }
}  
