const user1 = {
  name: "Sasha",
  dob: "1977-12-01",
  address: {},
  wallets:[{type: "bitcoin"}]
}
// dto, pojo, anemic model

type UserType = typeof user1

const service ={
  async getUsers(){},
  async createUSer(user: UserType){}
}