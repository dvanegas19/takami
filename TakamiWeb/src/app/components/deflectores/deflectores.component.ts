import { Component, OnInit } from '@angular/core';
import { TipoescudosService} from '../../services/tipoescudos.service';
import {FabricantesService } from '../../services/fabricantes.service'; 
import { DeflectoresService } from '../../services/deflectores.service'; 
import { tipoescudos} from '../../models/tipoescudos'; 
import { FormGroup, FormBuilder , FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-deflectores',
  templateUrl: './deflectores.component.html',
  styleUrls: ['./deflectores.component.css']
})
export class DeflectoresComponent implements OnInit {
  public formGroup: FormGroup;
  editarVisible : boolean = false;
  tipoDeflectores: object;
  listaFabricantes: object;
  listaDeflectores: object;
  submitted = false;
  result: any;
  model: any;
  response:any;
  tipoescudos: tipoescudos;
  processValidation = false;
  idEditDeflector = 0;

  constructor(private tipoescudosService:TipoescudosService, private fabricantesService: FabricantesService, 
              private deflectoresService:DeflectoresService, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      consumo: new FormControl('0', [Validators.minLength(1), Validators.maxLength(4)]),
      fuerza:new FormControl('0', [Validators.minLength(1),, Validators.maxLength(4)]),
      fuerzaMinima:new FormControl('0', Validators.minLength(1)),
      fabricante: new FormControl(),
      tipoEscudo: new FormControl(),
      fechaLanzamiento: new FormControl(Validators.required),
      FechaVigencia: new FormControl(Validators.required)

    });
    this.tipoescudosService.getTipoEscudos()
    .subscribe(
      data => this.tipoDeflectores = data);    

        this.fabricantesService.getFabricantes().subscribe(data=> 
        this.listaFabricantes=data
        );

        
        this.deflectoresService.obtenerDeflectores().subscribe(data=> 
          this.listaDeflectores = data);

  } 

  onSubmit() { 
    this.submitted = true; 
  }

  editar(deflectores: tipoescudos){

    this.formGroup = this.formBuilder.group({
      consumo: new FormControl(deflectores.Consumo),
      fuerza:new FormControl(deflectores.FuerzaRuptura),
      fuerzaMinima:new FormControl(deflectores.FuerzaMinima),
      fabricante: new FormControl(deflectores.IdFabricante),
      tipoEscudo: new FormControl(deflectores.IdTipoEscudo),
      fechaLanzamiento: new FormControl(deflectores.FechaLanzamiento),
      FechaVigencia: new FormControl(deflectores.TiempoVidaEstimado)

    });
    this.idEditDeflector = deflectores.IdEscudosDeflectores;
    this.editarVisible = true;   
  }

  eliminar(id:number){

    this.deflectoresService.deleteDeflectores(id).subscribe(data=> {
      this.result = data 
      if(this.result.status == 201){
        this.cargarDeflectores();
      }
    })     

  }

  Guardar(){
  
    if (this.formGroup.invalid) {
      return; 
    }
    this.model = {
      IdFabricante: this.formGroup.get('fabricante').value,
      Consumo: this.formGroup.get('consumo').value , 
      FuerzaRuptura: this.formGroup.get('fuerza').value, 
      FuerzaMinima: this.formGroup.get('fuerzaMinima').value, 
      IdTipoEscudo: this.formGroup.get('tipoEscudo').value, 
      FechaLanzamiento: this.formGroup.get('fechaLanzamiento').value, 
      TiempoVidaEstimado: this.formGroup.get('FechaVigencia').value
    }
    this.deflectoresService.agregarDeflectores(this.model).subscribe(data=> {

      this.result = data
      if(this.result.status == 200 ){
        this.limpiarControles();
        this.cargarDeflectores();
      }
    });
  }  

  cargarDeflectores(){
    this.deflectoresService.obtenerDeflectores().subscribe(data=> 
      this.listaDeflectores = data)
  }

limpiarControles(){
  this.formGroup = this.formBuilder.group({
    consumo: new FormControl('', [Validators.minLength(1), Validators.maxLength(4)]),
    fuerza:new FormControl('', [Validators.minLength(1),, Validators.maxLength(4)]),
    fuerzaMinima:new FormControl('', Validators.minLength(1)),
    fabricante: new FormControl('0'),
    tipoEscudo: new FormControl(''),
    fechaLanzamiento: new FormControl('',Validators.required),
    FechaVigencia: new FormControl('',Validators.required)

  });
  this.idEditDeflector = 0;
  this.processValidation = false;
  this.editarVisible = false;
}

EditarDeflector(){
  this.model = {
    IdEscudosDeflectores: this.idEditDeflector,
    IdFabricante: this.formGroup.get('fabricante').value,
    Consumo: this.formGroup.get('consumo').value , 
    FuerzaRuptura: this.formGroup.get('fuerza').value, 
    FuerzaMinima: this.formGroup.get('fuerzaMinima').value, 
    IdTipoEscudo: this.formGroup.get('tipoEscudo').value, 
    FechaLanzamiento: this.formGroup.get('fechaLanzamiento').value, 
    TiempoVidaEstimado: this.formGroup.get('FechaVigencia').value
  }

  this.deflectoresService.editarDeflectores(this.model).subscribe(data =>{
    this.result = data 
    if(this.result.status == 200){
      this.cargarDeflectores();
    }
  });
}


}