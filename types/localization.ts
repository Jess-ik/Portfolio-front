export type Language = "en" | "fr";

export type ParamsWithLanguage<T extends object = {}> = {
  locale: Language;
} & T;