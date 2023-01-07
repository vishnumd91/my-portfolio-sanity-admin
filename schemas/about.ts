import {defineField, defineType} from 'sanity'
import countries from './countries'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    }),
    defineField({
      name: 'lastName',
      title: 'LastName',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      options: {
        list: [...countries],
      },
    }),
    defineField({
      name: 'pin',
      title: 'Area Code',
      type: 'number',
    }),
    defineField({
      name: 'mobileNumber',
      title: 'Mobile Number',
      type: 'number',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'github',
      title: 'Github URL',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'Linkedin URL',
      type: 'string',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'string',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter URL',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
