import { author } from './author'
import { blog } from './blog'
import { comment } from './comment'
import {eventType} from './eventTypes'
import { tags } from './tags'
import { team } from './team'

export const schemaTypes = [
    eventType,
    blog,
    author,
    tags,
    comment,
    team,
]