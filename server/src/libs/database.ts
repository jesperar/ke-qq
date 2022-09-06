import { db } from '../config/database';
import mysql from 'mysql2/promise';

export default mysql.createPool(db);

