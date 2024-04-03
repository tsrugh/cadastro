import {CONNECTION} from './constants/constants.js'
import mySql from 'mysql'

const conn = mySql.createConnection(CONNECTION)

export default conn