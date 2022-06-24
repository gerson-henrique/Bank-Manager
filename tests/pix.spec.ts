import { expect } from "chai";
import Pix from "../src/model/entities/Pix"

describe('Pix Entitiy', () => { 
  it("se o Pix é positivo",() => {
    const sut = new Pix(1,'email@email',new Date());
    sut.value = 100; 
  expect(sut.value).to.be.equal(100);
  })
  it("se Pix tem uma key",() => {
    const sut = new Pix(1,'email@email',new Date());
    expect(sut.key).to.be.equal('email@email');
  })
 })