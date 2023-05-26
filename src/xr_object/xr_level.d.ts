declare module "xray16" {
  /**
   * @source C++ class CZoneCampfire : CGameObject
   * @customConstructor CZoneCampfire
   * @group xr_level
   */
  export class CZoneCampfire extends CGameObject {
    public constructor();

    public is_on(): boolean;
    public turn_on(): void;
    public turn_off(): void;
  }

  /**
   * @source C++ class CPhysicObject : CGameObject
   * @customConstructor CPhysicObject
   * @group xr_level
   */
  export class CPhysicObject extends CGameObject {
    public set_door_ignore_dynamics(): void;
    public play_bones_sound(): void;
    public run_anim_back(): void;
    public unset_door_ignore_dynamics(): void;
    public run_anim_forward(): void;
    public stop_anim(): boolean;
    public anim_time_get(): f32;
    public anim_time_set(value: f32): void;
    public stop_bones_sound(): void;
  }

  /**
   * @source C++ class hanging_lamp : CGameObject
   * @customConstructor hanging_lamp
   * @group xr_level
   */
  export class hanging_lamp extends CGameObject {
    public constructor();

    public turn_on(): void;
    public turn_off(): void;
  }

  /**
   * @source C++ class CCar : CGameObject, holder
   * @customConstructor CCar
   * @group xr_level
   */
  export class CCar extends CGameObject implements holder {
    public static eWpnActivate: 3;
    public static eWpnAutoFire: 5;
    public static eWpnDesiredDir: 1;
    public static eWpnDesiredPos: 2;
    public static eWpnFire: 4;
    public static eWpnToDefaultDir: 6;

    public constructor();

    public CanHit(): boolean;
    public CarExplode(): void;
    public ChangefFuel(fule: f32): void;
    public ChangefHealth(value: f32): void;
    public CurrentVel(): vector;
    public ExplodeTime(): u32;
    public FireDirDiff(): f32;
    public GetfFuel(): f32;
    public GetfFuelConsumption(): f32;
    public GetfFuelTank(): f32;
    public GetfHealth(): f32;
    public HasWeapon(): boolean;
    public IsActiveEngine(): boolean;
    public IsObjectVisible(game_object: game_object): boolean;
    public PlayDamageParticles(): void;
    public SetExplodeTime(time: u32): void;
    public SetfFuel(fuel: f32): void;
    public SetfFuelConsumption(consumption: f32): void;
    public SetfFuelTank(fuel: f32): void;
    public SetfHealth(health: f32): void;
    public StartEngine(): void;
    public StopDamageParticles(): void;
    public StopEngine(): void;

    public engaged(): boolean;
    public Action(value1: u16, value2: u32): void;
    public SetParam(value: i32, vector: vector): void;
    public SetParam(value: TXR_CCar_weapon_param, vector: vector): void;
  }

  /**
   * @group xr_level
   */
  export type TXR_CCar_weapon_param = EnumeratedStaticsValues<typeof CCar>;

  /**
   * @source C++ class CHelicopter : CGameObject
   * @customConstructor CHelicopter
   * @group xr_level
   */
  export class CHelicopter extends CGameObject {
    public static readonly eAlive: 0;
    public static readonly eBodyByPath: 0;
    public static readonly eBodyToPoint: 1;
    public static readonly eDead: 1;
    public static readonly eEnemyEntity: 2;
    public static readonly eEnemyNone: 0;
    public static readonly eEnemyPoint: 1;
    public static readonly eMovLanding: 4;
    public static readonly eMovNone: 0;
    public static readonly eMovPatrolPath: 2;
    public static readonly eMovRoundPath: 3;
    public static readonly eMovTakeOff: 5;
    public static readonly eMovToPoint: 1;

    public readonly m_exploded: boolean;
    public readonly m_light_started: boolean;
    public readonly m_flame_started: boolean;
    public readonly m_dead: boolean;
    public m_max_mgun_dist: f32;
    public m_max_rocket_dist: f32;
    public m_min_mgun_dist: f32;
    public m_min_rocket_dist: f32;
    public m_syncronize_rocket: boolean;
    public m_time_between_rocket_attack: u32;
    public m_use_mgun_on_attack: boolean;
    public m_use_rocket_on_attack: boolean;

    public constructor();

    public isVisible(game_object: game_object): boolean;
    public GetSafeAltitude(): f32;
    public GetRealAltitude(): f32;
    public GetCurrVelocity(): f32;
    public GetSpeedInDestPoint(value: f32): f32;
    public GetOnPointRangeDist(): f32;
    public GetMaxVelocity(): f32;
    public GetfHealth(): f32;
    public GetMovementState(): i32; /* enum ? */
    public GetBodyState(): i32; /* enum ? */
    public GetCurrVelocityVec(): vector;
    public GetState(): i32;
    public GetDistanceToDestPosition(): f32;
    public GetHuntState(): i32; /* enum ? */
    public SetSpeedInDestPoint(value: f32): unknown;
    public SetLinearAcc(value1: f32, value2: f32): void;
    public SetfHealth(health: f32): f32;
    public SetMaxVelocity(value: f32): void;
    public SetEnemy(game_object: game_object | null): void;
    public SetEnemy(vector: vector): void;
    public SetFireTrailLength(value: f32): void;
    public SetBarrelDirTolerance(value: f32): void;
    public SetDestPosition(vector: vector): void;
    public SetOnPointRangeDist(value: f32): void;

    public LookAtPoint(vector: vector, value: boolean): void;
    public GoPatrolByPatrolPath(value1: string, value2: i32): void;
    public Explode(): void;
    public TurnLighting(value: boolean): void;
    public UseFireTrail(): boolean;
    public UseFireTrail(value: boolean): void;
    public GoPatrolByRoundPath(vector: vector, value1: f32, value2: boolean): void;
    public Die(): void;
    public StartFlame(): void;
    public TurnEngineSound(enabled: boolean): void;
    public ClearEnemy(): void;
  }
}
