import User from '../../users/user.entity';

const mockedUser: User = {
  _id: null,
  id: '198798685765876897',
  email: 'user@email.com',
  name: 'John',
  password: 'hash',
  stripeCustomerId: 'stripe_customer_id',
  phoneNumber: '+48123123123',
  address: {
    _id: null,
    id: '10980980980-0=-0=-0',
    street: 'streetName',
    city: 'cityName',
    country: 'countryName',
  },
  isTwoFactorAuthenticationEnabled: false,
  isEmailConfirmed: false,
  isPhoneNumberConfirmed: false,
  isRegisteredWithGoogle: false,
  async b4register() {},
  async b4update() {},
};

export default mockedUser;
