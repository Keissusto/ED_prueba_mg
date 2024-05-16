export interface DataDS {
  datos: Dato[];
}

export interface Dato {
  id: number;
  imagen: string;
  requirements: Requirements;
  damage_reduction: Damagereduction;
  weapon_type: string;
  weight: number;
  damage: Damagereduction;
  durability: number;
  name: string;
  attack_type: string;
  bonus: Bonus;
}

export interface Bonus {
  faith?: string;
  strength?: string;
  intelligence?: string;
  dexterity?: string;
}

export interface Damagereduction {
  physical: number;
  magic: number;
  lightning: number;
  fire: number;
}

export interface Requirements {
  faith: number;
  strength: number;
  intelligence: number;
  dexterity: number;
}
