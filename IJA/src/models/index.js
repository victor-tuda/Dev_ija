// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tarefa, Gestor, Aprendiz, TarefaAprendiz } = initSchema(schema);

export {
  Tarefa,
  Gestor,
  Aprendiz,
  TarefaAprendiz
};