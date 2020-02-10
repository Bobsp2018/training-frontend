import React from "react";

import TitleCollab from "../../components/TitleCollab";
import FieldCollab from "../../components/FieldCollab";
import ButtonCollab from "../../components/ButtonCollab";
import ActionCollab from "../../components/ActionCollab";
import FormAuth from "../../containers/FormAuth";
import useFormSignup from "./useFormSignup";
import AuthService from "../../services/AuthService";

function FormLogin() {
  const { user, handleChange, handleSubmit, errors } = useFormSignup(sendUser);

  function sendUser() {
    AuthService.signup(user);
  }

  return (
    <FormAuth noValidate onSubmit={handleSubmit}>
      <TitleCollab content="Cadastro" />

      <FieldCollab
        content="Nome:"
        htmlFor="name"
        id="name"
        name="name"
        value={user.name}
        onChange={handleChange}
        msgError={errors.name}
      />

      <FieldCollab
        content="E-mail:"
        htmlFor="email"
        id="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        msgError={errors.email}
      />

      <FieldCollab
        content="Senha:"
        htmlFor="password"
        id="password"
        name="password"
        value={user.value}
        type="password"
        onChange={handleChange}
        msgError={errors.password}
      />
      <ButtonCollab content="Enviar" as="button" />
      <ActionCollab content="Já tenho cadastro" to="/auth/login" />
    </FormAuth>
  );
}

export default FormLogin;
