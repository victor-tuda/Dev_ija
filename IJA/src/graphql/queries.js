/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTarefa = /* GraphQL */ `
  query GetTarefa($id: ID!) {
    getTarefa(id: $id) {
      id
      titulo
      descricao
      data
      hora
      gestorID
      AprendizesTarefas {
        items {
          id
          tarefaId
          aprendizId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTarefas = /* GraphQL */ `
  query ListTarefas(
    $filter: ModelTarefaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTarefas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        titulo
        descricao
        data
        hora
        gestorID
        AprendizesTarefas {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const tarefasByGestorID = /* GraphQL */ `
  query TarefasByGestorID(
    $gestorID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTarefaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tarefasByGestorID(
      gestorID: $gestorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        titulo
        descricao
        data
        hora
        gestorID
        AprendizesTarefas {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGestor = /* GraphQL */ `
  query GetGestor($id: ID!) {
    getGestor(id: $id) {
      id
      nome
      sobrenome
      RG
      CPF
      Idade
      dataNasc
      endereco
      CEP
      email
      celular
      setor
      cargo
      GestorAprendizes {
        items {
          id
          nome
          sobrenome
          RG
          CPF
          idade
          dataNasc
          endereco
          CEP
          email
          celular
          dataIInicioContratacao
          dataFimContratacao
          setor
          cargo
          gestorID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      Tarefas {
        items {
          id
          nome
          sobrenome
          RG
          CPF
          idade
          dataNasc
          endereco
          CEP
          email
          celular
          dataIInicioContratacao
          dataFimContratacao
          setor
          cargo
          gestorID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listGestors = /* GraphQL */ `
  query ListGestors(
    $filter: ModelGestorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGestors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nome
        sobrenome
        RG
        CPF
        Idade
        dataNasc
        endereco
        CEP
        email
        celular
        setor
        cargo
        GestorAprendizes {
          nextToken
          __typename
        }
        Tarefas {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAprendiz = /* GraphQL */ `
  query GetAprendiz($id: ID!) {
    getAprendiz(id: $id) {
      id
      nome
      sobrenome
      RG
      CPF
      idade
      dataNasc
      endereco
      CEP
      email
      celular
      dataIInicioContratacao
      dataFimContratacao
      setor
      cargo
      gestorID
      tarefas {
        items {
          id
          tarefaId
          aprendizId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listAprendizs = /* GraphQL */ `
  query ListAprendizs(
    $filter: ModelAprendizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAprendizs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nome
        sobrenome
        RG
        CPF
        idade
        dataNasc
        endereco
        CEP
        email
        celular
        dataIInicioContratacao
        dataFimContratacao
        setor
        cargo
        gestorID
        tarefas {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const aprendizsByGestorID = /* GraphQL */ `
  query AprendizsByGestorID(
    $gestorID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAprendizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aprendizsByGestorID(
      gestorID: $gestorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nome
        sobrenome
        RG
        CPF
        idade
        dataNasc
        endereco
        CEP
        email
        celular
        dataIInicioContratacao
        dataFimContratacao
        setor
        cargo
        gestorID
        tarefas {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTarefaAprendiz = /* GraphQL */ `
  query GetTarefaAprendiz($id: ID!) {
    getTarefaAprendiz(id: $id) {
      id
      tarefaId
      aprendizId
      tarefa {
        id
        titulo
        descricao
        data
        hora
        gestorID
        AprendizesTarefas {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      aprendiz {
        id
        nome
        sobrenome
        RG
        CPF
        idade
        dataNasc
        endereco
        CEP
        email
        celular
        dataIInicioContratacao
        dataFimContratacao
        setor
        cargo
        gestorID
        tarefas {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listTarefaAprendizs = /* GraphQL */ `
  query ListTarefaAprendizs(
    $filter: ModelTarefaAprendizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTarefaAprendizs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tarefaId
        aprendizId
        tarefa {
          id
          titulo
          descricao
          prazoIni
          prazoFim
          gestorID
          createdAt
          updatedAt
          __typename
        }
        aprendiz {
          id
          nome
          sobrenome
          RG
          CPF
          idade
          dataNasc
          endereco
          CEP
          email
          celular
          dataIInicioContratacao
          dataFimContratacao
          setor
          cargo
          gestorID
          createdAt
          updatedAt
          owner
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const tarefaAprendizsByTarefaId = /* GraphQL */ `
  query TarefaAprendizsByTarefaId(
    $tarefaId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTarefaAprendizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tarefaAprendizsByTarefaId(
      tarefaId: $tarefaId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tarefaId
        aprendizId
        tarefa {
          id
          titulo
          descricao
          data
          hora
          gestorID
          createdAt
          updatedAt
          __typename
        }
        aprendiz {
          id
          nome
          sobrenome
          RG
          CPF
          idade
          dataNasc
          endereco
          CEP
          email
          celular
          dataIInicioContratacao
          dataFimContratacao
          setor
          cargo
          gestorID
          createdAt
          updatedAt
          owner
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const tarefaAprendizsByAprendizId = /* GraphQL */ `
  query TarefaAprendizsByAprendizId(
    $aprendizId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTarefaAprendizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tarefaAprendizsByAprendizId(
      aprendizId: $aprendizId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tarefaId
        aprendizId
        tarefa {
          id
          titulo
          descricao
          data
          hora
          gestorID
          createdAt
          updatedAt
          __typename
        }
        aprendiz {
          id
          nome
          sobrenome
          RG
          CPF
          idade
          dataNasc
          endereco
          CEP
          email
          celular
          dataIInicioContratacao
          dataFimContratacao
          setor
          cargo
          gestorID
          createdAt
          updatedAt
          owner
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
