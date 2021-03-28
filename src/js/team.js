// eslint-disable-next-line import/extensions
import { Bowerman } from './Character.js';

class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (!this.members.has(character)) {
      this.members.add(character);
    } else {
      throw new Error('this member allready in the team');
    }
  }

  addAll(...character) {
    [...character].forEach((i) => {
      if (!this.members.has(i)) {
        this.members.add(i);
      }
    });
  }

  toArray() {
    const array = [];
    // eslint-disable-next-line guard-for-in
    for (const i of this.members) {
      array.push(i);
    }
    return array;
  }
}
export default Team;

const grisha = new Bowerman('grisha');
const dima = new Bowerman('dima');
const ivan = new Bowerman('ivan');
const team = new Team();
console.log(team)
team.add(grisha);
console.log(team)
console.log(team.toArray());