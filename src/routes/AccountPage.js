import React from 'react';
import { connect } from 'dva';
import styles from './AccountPage.css';
import selector from '../models/accounts/selector';
import Accounts from '../components/Accounts';
import Edit from '../components/Accounts/Edit';
import View from '../components/Accounts/View';
import Add from '../components/Accounts/Add';
import BatchAdd from '../components/Accounts/BatchAdd';

const AccountPage = ({accounts,dispatch}) => {
  return (
    <div className={styles['account']}>
      <Accounts dispatch={dispatch} data={accounts.accounts}></Accounts>
    </div>
  );
}

AccountPage.propTypes = {
};

const Account = connect(selector)(AccountPage);
const AccountEdit = connect(selector)(Edit);
const AccountView = connect(selector)(View);
const AccountAdd = connect(selector)(Add);
const AccountBatchAdd = connect(selector)(BatchAdd);

export {
  Account as default,
  AccountEdit,
  AccountView,
  AccountAdd,
  AccountBatchAdd,
}
