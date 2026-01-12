export const BASE_URL = "http://localhost:8080"; // no trailing slash

export const ENDPOINTS = Object.freeze({
  // Authentication
  AUTH: {
    LOGIN: "/api/auth/login",
    REGISTER: "/api/auth/register",
  },

  // Projects
  PROJECTS: {
    CREATE: "/api/projects/create",
    GET_ALL: "/api/projects/getProjects",
    GET_BY_KEY: (key) => `/api/projects/${key}/get`,
    UPDATE: (key) => `/api/projects/${key}/update`,
    ARCHIVE: (key) => `/api/projects/${key}/archive`,
    DELETE: (key) => `/api/projects/${key}/delete`,
  },

  // Issues
  ISSUES: {
    CREATE: "/api/issues",
    GET_BY_KEY: (key) => `/api/issues/${key}`,
    GET_BY_PROJECT: (projectKey) => `/api/issues/project/${projectKey}`,
    UPDATE: (key) => `/api/issues/${key}`,
    DELETE: (key) => `/api/issues/${key}`,
  },

  // Teams
  TEAMS: {
    CREATE: "/api/team/create_team",
    ASSIGN_MEMBER: "/api/team/assignMember_team",
    ASSIGN_PROJECT: "/api/team/assign_project",
  },

  // Sprints
  SPRINTS: {
    CREATE: "/api/sprints",
    GET_BY_PROJECT: (projectKey) => `/api/sprints/project/${projectKey}`,
    UPDATE_STATUS: (id, status) => `/api/sprints/${id}/status?status=${status}`,
    GET_ISSUES: (id) => `/api/sprints/${id}/issues`,
    ADD_ISSUE: (id, issueKey) => `/api/sprints/${id}/issues/${issueKey}`,
    REMOVE_ISSUE: (id, issueKey) => `/api/sprints/${id}/issues/${issueKey}`,
  },

  // Comments
  COMMENTS: {
    CREATE: "/api/comments",
    GET_BY_ISSUE: (issueKey) => `/api/comments/issue/${issueKey}`,
    UPDATE: (id) => `/api/comments/${id}`,
    DELETE: (id, authorId) => `/api/comments/${id}?authorId=${authorId}`,
  },

  // Boards
  BOARDS: {
    GET_PROJECT_BOARD: (projectKey) => `/api/boards/project/${projectKey}`,
    GET_SPRINT_BOARD: (sprintId) => `/api/boards/sprint/${sprintId}`,
  },
});
