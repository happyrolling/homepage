export interface LoggerLog {
  log(): void;
}

export interface LoggerError {
  error(): void;
}

export interface LoggerDebug {
  debug(): void;
}

export interface LoggerSecure {
  secure(): void;
}

export interface Logger
  extends LoggerLog,
    LoggerError,
    LoggerDebug,
    LoggerSecure {}
