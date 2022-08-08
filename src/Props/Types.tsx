//single type file to avoid complexity

export type NamedProps ={
    firstName: String
    lastName: String
    age?: Number //specifies that this field is optional cause TS throws an error for defined props in here but not in app/main component
    developer: Boolean
}

export type SimilarProps ={
    firstName: String
    lastName: String
}

export type Names = {
    names: SimilarProps // is an object just getting value form similarProps object
}

export type ArrayKeProps ={
    name: SimilarProps[]
}