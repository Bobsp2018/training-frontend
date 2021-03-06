import React from "react";

import PageAuth from "../../containers/PageAuth";
import ContentAuth from "../../containers/ContentAuth";
import HeaderAuth from "../../containers/HeaderAuth";
import FormLogin from "../../containers/FormLogin";

function Login() {
  return (
    <PageAuth>
      <ContentAuth>
        <HeaderAuth />
        <FormLogin />
      </ContentAuth>
    </PageAuth>
  );
}

export default Login;
