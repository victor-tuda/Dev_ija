import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerTarefa = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tarefa, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly titulo?: string | null;
  readonly descricao?: string | null;
  readonly data?: string | null;
  readonly hora?: string | null;
  readonly gestorID: string;
  readonly AprendizesTarefas?: (TarefaAprendiz | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTarefa = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tarefa, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly titulo?: string | null;
  readonly descricao?: string | null;
  readonly data?: string | null;
  readonly hora?: string | null;
  readonly gestorID: string;
  readonly AprendizesTarefas: AsyncCollection<TarefaAprendiz>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Tarefa = LazyLoading extends LazyLoadingDisabled ? EagerTarefa : LazyTarefa

export declare const Tarefa: (new (init: ModelInit<Tarefa>) => Tarefa) & {
  copyOf(source: Tarefa, mutator: (draft: MutableModel<Tarefa>) => MutableModel<Tarefa> | void): Tarefa;
}

type EagerGestor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Gestor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome?: string | null;
  readonly sobrenome?: string | null;
  readonly RG?: string | null;
  readonly CPF?: string | null;
  readonly Idade?: number | null;
  readonly dataNasc?: string | null;
  readonly endereco?: string | null;
  readonly CEP?: string | null;
  readonly email?: string | null;
  readonly celular?: string | null;
  readonly setor?: string | null;
  readonly cargo?: string | null;
  readonly GestorAprendizes?: (Aprendiz | null)[] | null;
  readonly Tarefas?: (Aprendiz | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGestor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Gestor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome?: string | null;
  readonly sobrenome?: string | null;
  readonly RG?: string | null;
  readonly CPF?: string | null;
  readonly Idade?: number | null;
  readonly dataNasc?: string | null;
  readonly endereco?: string | null;
  readonly CEP?: string | null;
  readonly email?: string | null;
  readonly celular?: string | null;
  readonly setor?: string | null;
  readonly cargo?: string | null;
  readonly GestorAprendizes: AsyncCollection<Aprendiz>;
  readonly Tarefas: AsyncCollection<Aprendiz>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Gestor = LazyLoading extends LazyLoadingDisabled ? EagerGestor : LazyGestor

export declare const Gestor: (new (init: ModelInit<Gestor>) => Gestor) & {
  copyOf(source: Gestor, mutator: (draft: MutableModel<Gestor>) => MutableModel<Gestor> | void): Gestor;
}

type EagerAprendiz = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Aprendiz, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome: string;
  readonly sobrenome?: string | null;
  readonly RG?: string | null;
  readonly CPF?: string | null;
  readonly idade?: number | null;
  readonly dataNasc?: string | null;
  readonly endereco?: string | null;
  readonly CEP?: string | null;
  readonly email?: string | null;
  readonly celular?: string | null;
  readonly dataIInicioContratacao?: string | null;
  readonly dataFimContratacao?: string | null;
  readonly setor?: string | null;
  readonly cargo?: string | null;
  readonly gestorID: string;
  readonly tarefas?: (TarefaAprendiz | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAprendiz = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Aprendiz, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome: string;
  readonly sobrenome?: string | null;
  readonly RG?: string | null;
  readonly CPF?: string | null;
  readonly idade?: number | null;
  readonly dataNasc?: string | null;
  readonly endereco?: string | null;
  readonly CEP?: string | null;
  readonly email?: string | null;
  readonly celular?: string | null;
  readonly dataIInicioContratacao?: string | null;
  readonly dataFimContratacao?: string | null;
  readonly setor?: string | null;
  readonly cargo?: string | null;
  readonly gestorID: string;
  readonly tarefas: AsyncCollection<TarefaAprendiz>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Aprendiz = LazyLoading extends LazyLoadingDisabled ? EagerAprendiz : LazyAprendiz

export declare const Aprendiz: (new (init: ModelInit<Aprendiz>) => Aprendiz) & {
  copyOf(source: Aprendiz, mutator: (draft: MutableModel<Aprendiz>) => MutableModel<Aprendiz> | void): Aprendiz;
}

type EagerTarefaAprendiz = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TarefaAprendiz, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tarefaId?: string | null;
  readonly aprendizId?: string | null;
  readonly tarefa: Tarefa;
  readonly aprendiz: Aprendiz;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTarefaAprendiz = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TarefaAprendiz, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tarefaId?: string | null;
  readonly aprendizId?: string | null;
  readonly tarefa: AsyncItem<Tarefa>;
  readonly aprendiz: AsyncItem<Aprendiz>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TarefaAprendiz = LazyLoading extends LazyLoadingDisabled ? EagerTarefaAprendiz : LazyTarefaAprendiz

export declare const TarefaAprendiz: (new (init: ModelInit<TarefaAprendiz>) => TarefaAprendiz) & {
  copyOf(source: TarefaAprendiz, mutator: (draft: MutableModel<TarefaAprendiz>) => MutableModel<TarefaAprendiz> | void): TarefaAprendiz;
}