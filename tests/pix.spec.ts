import { expect } from "chai";
import Pix from "../src/model/entities/Pix"

describe('Pix Entitiy', () => { 
  it("se o Pix é positivo",() => {
    const sut = new Pix(100,1,'email@email',new Date());
  expect(sut.value).to.be.equal(100);
  })
 })