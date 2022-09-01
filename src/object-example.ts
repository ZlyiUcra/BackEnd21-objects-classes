import {ObjectId} from "mongodb";

const userFabric = (name: string, dob: string, wallets: { type: string }[]) => {
  const user = {
    id: new ObjectId(),
    name,
    dob,
    address: {},
    wallets,
    async save() {
    },
    async getFriends() {
      console.log(this.id);
      return true
    },
    async updateUSer(email: string) {
      const result = await this.getFriends();
      if (result) {

      }
    }
  }
  return user
}
// const user = {
//   name: "Sasha",
//   dob: "1977-12-01",
//   address: {},
//   wallets: [{type: "bitcoin"}],
//   async getUsers() {
//   },
//   async createUSer() {
//   }
// }
class User {
  id: ObjectId;
  name: string;
  dob: string;
  wallets: { type: string }[];
  address: { street: string };

  constructor(name: string, dob: string, wallets: { type: string }[]) {
    this.name = name;
    this.dob = dob;
    this.wallets = wallets;
    this.id = new ObjectId();
    this.address = {street: ''};
  }
  async save() {
  }
  async getFriends() {
    console.log(this.id);
    return true
  }
  async updateUSer(email: string) {
    const result = await this.getFriends();
    if (result) {

    }
  }
}

const user1 = userFabric("Sasha", "1977-12-01", [{type: "bitcoin"}]);
const user2 = userFabric("Zuy", "1976-10-20", [{type: "byn"}])
const user3 = new User("Zuy", "1976-10-20", [{type: "byn"}])
// const user2 = {
//   name: "Zuy",
//   dob: "1976-10-20",
//   address: {},
//   wallets: [{type: "byn"}],
//   async getUsers() {
//   },
//   async createUSer() {
//   }
// }
// dto, pojo, anemic model


const service = {
  async getUsers() {
  },
  async createUSer() {
  }
}

