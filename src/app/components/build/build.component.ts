import { Component, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectConfiguratorData } from 'src/app/reducer/alpine.reducer';
import { ActivatedRoute } from '@angular/router';
import ICar from 'src/app/model/car.model';
import { afterSelection, selectColor, selectRim, selectInterior, selectEquipment, selectAccessory } from 'src/app/action/configurator.action';
import { IData } from 'src/app/data/alpine';
import IColor from 'src/app/model/color.model';
import IRim from 'src/app/model/rim.model';
import IInterior from 'src/app/model/interior.model';
import IEquipment from 'src/app/model/equipment.model';
import IAccessory from 'src/app/model/accessory.model.ts';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss'],
})
export class BuildComponent implements OnInit {
  configuratorData!: IData;
  car!: ICar;
  currentIndex: number = 0;

  selectedColor: IColor | null = null;
  selectedRim: IRim | null = null;
  selectedInterior: IInterior | null = null;
  selectedEquipment: IEquipment | null = null;

  totalCard: boolean = false;
  passToExterior: boolean = false;
  passToRims: boolean = false;
  passToInterior: boolean = false;
  passToEquipment: boolean = false;
  passToAccessories: boolean = false;

  filteredRimPhoto: { color: string, photo: string }[] = [];
  equipmentKeys: string[] | undefined = undefined;
  accessoryKeys: string[] | undefined = undefined;
  interiorColorslides: Array<string> = [];
  rimPhoto: string = '';
  disabledEquipmentStatus: { [key: string]: boolean } = {};
  disabledAccesoryStatus: { [key: string]: boolean } = {};

  equipmentListToggler: { [key: string]: boolean } = {};
  accessoryListToggler: { [key: string]: boolean } = {};

  equipmentCategoryPhotos: { [key: string]: string } = {
    design: "../../../assets/images/configurateur/equipements/selection/design.jpg",
    media: "../../../assets/images/configurateur/equipements/selection/media-nav.jpg",
    comfort: "../../../assets/images/configurateur/equipements/selection/confort.jpg",
    drive: "../../../assets/images/configurateur/equipements/selection/conduite.jpg",
    security: "../../../assets/images/configurateur/equipements/selection/securite.jpg",
    customize: "../../../assets/images/configurateur/equipements/selection/perso-int.jpg",
  };
  accessoryCategoryPhotos: { [key: string]: string } = {
    transport_and_protection: `<i class="fa-solid fa-hands-holding"></i>`,
    multimedia: `<i class="fa-solid fa-compact-disc"></i>`,
    garage_accessories: `<i class="fa-solid fa-screwdriver-wrench"></i>`,
    interior: `<i class="fa-solid fa-puzzle-piece"></i>`,
    exterior: `<i class="fa-solid fa-car"></i>`
  }

  constructor(
    private store: Store<{ configurator: any }>,
    private renderer: Renderer2,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // SCROLL INTO TOP WHEN LOADED
    window.scrollTo(0, 0);

    // SUBSCRIBE TO STORE AND GETTING THE WHOLE DATA
    this.store.select(selectConfiguratorData).subscribe((data) => {
      this.configuratorData = data;
    })
    // SUBSCRIBE TO STORE AND GETTING THE CURRENT VEHICLE DATA
    this.store.select((state) => state.configurator.selectedCar).subscribe((selectedCar) => {

      this.car = selectedCar;
      this.getRimPhoto();

      this.equipmentKeys = Object.keys(this.configuratorData.equipments);

      this.accessoryKeys = Object.keys(this.configuratorData.accessories);

      this.disabledEquipmentStatus = this.isBasicEquipment();
      this.disabledAccesoryStatus = this.hasAccessory();
    })
  }

  // FIND BASIC EQUIPMENTS
  isBasicEquipment(): { [key: number]: boolean } {
    const disabledStatus: { [key: number]: boolean } = {};

    for (const key of Object.keys(this.car.equipments)) {
      const carEquipments = this.car.equipments[key];

      for (const equipment of carEquipments) {
        const equipmentId = equipment.id;
        const isOptionDisabled = this.configuratorData.equipments[key].some(
          (option) => option.id === equipmentId
        );
        disabledStatus[equipmentId] = isOptionDisabled;
      }
    }

    return disabledStatus;
  }

  // FIND ADDED ACCESSORIES
  hasAccessory(): {[key: number]: boolean}{
    const disabledStatus: {[key: number]: boolean} = {};

    for (const key of Object.keys(this.car.accessories)){
      const carAccessories = this.car.accessories[key];

      for (const accessory of carAccessories) {
        const accessoryId = accessory.id;
        const isOptionDisabled = this.configuratorData.accessories[key].some(
          (option) => option.id === accessoryId
        );
        disabledStatus[accessoryId] = isOptionDisabled;
      }
    }
    return disabledStatus;
  }

  // FILTER RIM PHOTO
  getRimPhoto() {
    this.filteredRimPhoto = this.car.initial_rim.photos.filter((photo) => photo.color === this.car.initial_color.name)
    return this.filteredRimPhoto;
  }

  // TOGGLER FUNCTION
  toggleTotalCard(): void {
    this.totalCard = !this.totalCard;
  }
  toggleEquipmentList(categoryKey: string): void {
    this.equipmentListToggler[categoryKey] = !this.equipmentListToggler[categoryKey];
  }
  toggleAccessoryList(categoryKey: string): void {
    this.accessoryListToggler[categoryKey] = !this.accessoryListToggler[categoryKey];
  }

  // LOADER FUNCTIONS
  loadExteriorSection(): void {
    this.passToExterior = true;
    const exteriorSection = document.getElementById('exterior');

    if (exteriorSection) {
      this.renderer.setStyle(exteriorSection, 'display', 'block');
      exteriorSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  loadRimsSection(): void {
    this.passToRims = true;
    const rimsSection = document.getElementById('rims');

    if (rimsSection) {
      this.renderer.setStyle(rimsSection, 'display', 'block');
      rimsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  loadInteriorSection(): void {
    this.passToInterior = true;
    const interiorSection = document.getElementById('interior');

    if (interiorSection) {
      this.renderer.setStyle(interiorSection, 'display', 'block');
      interiorSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  loadEquipmentSection(): void {
    this.passToEquipment = true;
    const equipmentSection = document.getElementById('equipments');

    if (equipmentSection) {
      this.renderer.setStyle(equipmentSection, 'display', 'block');
      equipmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  loadAccessoriesSection(): void {
    this.passToAccessories = true;
    const accessoriesSection = document.getElementById('accessories');
    if(accessoriesSection){
      this.renderer.setStyle(accessoriesSection, 'display', 'block');
      accessoriesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // CLICK HANDLER FUNCTIONS
  handleColorClick(color: IColor) {
    this.selectedColor = color;
    this.store.dispatch(selectColor({ color }))
    this.store.dispatch(afterSelection())
  }
  handleRimClick(rim: IRim) {
    this.selectedRim = rim;
    console.log('Clicked Rims:', rim);
    this.store.dispatch(selectRim({ rim }))
    // this.store.dispatch(afterSelection())
  }
  handleInteriorClick(interior: IInterior) {
    this.selectedInterior = interior;
    this.store.dispatch(selectInterior({ interior }))

    // console.log('Clicked Interior:', interior);
  }
  handleEquipmentClick(key: string, equipment: IEquipment) {
    this.store.dispatch(selectEquipment({ key, equipment }));
    // console.log('Clicked Equipment:', key, equipment);
  }
  handleAccessoryClick(key: string, accessory: IAccessory) {
    this.store.dispatch(selectAccessory({ key, accessory }));
    console.log('Clicked Equipment:', key, accessory);
  }

  //SLIDER FUNCTIONS
  slideLeftExterior(): void {
    if ((this.currentIndex - 1) < 0) {
      this.currentIndex = this.car.photos.length - 1;
    } else {
      this.currentIndex = this.currentIndex - 1;
    }
  }
  slideRightExterior(): void {
    if (this.currentIndex + 1 === this.car.photos.length) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = this.currentIndex + 1;
    }
  }
  ////////////////////////////
  slideLeftInterior(): void {
    if ((this.currentIndex - 1) < 0) {
      this.currentIndex = this.car.initial_interior.photos.length - 1;
    } else {
      this.currentIndex = this.currentIndex - 1;
    }
  }
  slideRightInterior(): void {
    if (this.currentIndex + 1 === this.car.initial_interior.photos.length) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = this.currentIndex + 1;
    }
  }
}

