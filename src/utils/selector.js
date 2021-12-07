/*
 * I have no idea what I'm doing here, why I made this file :/
 * but since querySelector and querySelectorAll is "a bit hard to write"
 * and maybe this would useful for me (lol)
 * you see getOne return a function that would get a element by querySelector method
 * while getAll return a function that would get an element by querySelectorAll method
 * both function accept one parameter, the parameter called element, this would make sense than "a string" IMO
 * that's it!
 */

export const getOne = (element) => {
  return document.querySelector(element)
}

export const getAll = (element) => {
  return document.querySelectorAll(element)
}
