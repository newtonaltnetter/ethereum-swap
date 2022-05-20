import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId:'73ce4zdh',
    dataset: 'production',
    apiVersion: 'v1',
    token:
        'skuz0rANuNmIlnNKtpvA4UUjFR8xRQtkxVBoa46Lb6vAL9CBIueTWQSFcQi8X4r7eAqEUGrwkZ9cyyrz9TLjRpK0FxWXYSxlQHipSctcCViuOIN2KlvsUKmrkHhEwkiE3FINjIlpsXrzAlcPcAScTbN29Kwu6R8rRD0lDLyWd9ywhgfRPOYK',
    useCdn: false,
})