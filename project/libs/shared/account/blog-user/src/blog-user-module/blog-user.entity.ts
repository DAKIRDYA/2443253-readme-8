import { Entity } from '@project/core';
import { StorableEntity, AuthUser } from '@project/core';
import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './blog-user.constant';

export class BlogUserEntity extends Entity implements StorableEntity<AuthUser> {
  public email: string;
  public userName: string;
  public avatar: string;
  public passwordHash: string;
  public subscribers: string[];


  constructor(user?: AuthUser) {
    super();
    this.populate(user);
  }

  public populate(user?: AuthUser): void {
    if (! user) {
      return;
    }

    this.id = user.id ?? '';
    this.email = user.email;
    this.userName = user.userName;
    this.avatar = user.avatar;
    this.subscribers = user.subscribers;
    this.passwordHash = user.passwordHash;
    this.subscribers = user.subscribers;
  }

  public toPOJO(): AuthUser {
    return {
      id: this.id,
      email: this.email,
      userName: this.userName,
      avatar: this.avatar,
      passwordHash: this.passwordHash,
      subscribers:this.subscribers
    }
  }
  public async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
