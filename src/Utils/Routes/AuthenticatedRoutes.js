import React from 'react';
import { Route } from 'react-router';
import SharedLayout from '../../Components/Common/SharedLayout';

const AuthenticatedRoutes = (props) => {
    const { isAuthenticated, component: Component, ...rest } = props;
    return (
      <Route
        {...rest}
        render={(props) =>(
            <SharedLayout>           
              <Component {...props} />
            </SharedLayout>
        
          )
        }
      />
    );
};

export default AuthenticatedRoutes;