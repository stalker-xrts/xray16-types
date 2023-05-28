declare module "xray16" {
  /**
   * @source C++ class sound_params
   * @customConstructor sound_params
   * @group xr_sound
   */
  export class sound_params {
    public frequency: f32;
    public max_distance: f32;
    public min_distance: f32;
    public position: vector;
    public volume: f32;

    private constructor();
  }

  /**
   * @source C++ class sound_object
   * @customConstructor sound_object
   * @group xr_sound
   */
  export class sound_object {
    public static s3d: 0;
    public static looped: 1;
    public static s2d: 2;

    public frequency: f32;
    public max_distance: f32;
    public min_distance: f32;
    public volume: f32;

    /**
     * @param sound_path - file path
     */
    public constructor(sound_path: string);
    /**
     * @param sound_path - file path
     * @param type - default 'no_sound' (0)
     */
    public constructor(sound_path: string, type: TXR_snd_type);

    public length(): u32;
    public playing(): boolean;
    public get_position(): vector;

    public set_position(vector: vector): void;
    public attach_tail(sound_path: string): void;

    public play(object: game_object | null): void;
    public play(object: game_object | null, delay: f32): void;
    public play(object: game_object | null, delay: f32, type: TXR_sound_object_type): void;
    public play_at_pos(object: game_object, position: vector): void;
    public play_at_pos(object: game_object, position: vector, delay: f32): void;
    public play_at_pos(object: game_object, position: vector, delay: f32, type: i32): void;
    public play_no_feedback(
      object: game_object,
      type: TXR_sound_object_type,
      value1: f32,
      position: vector,
      value2: f32
    ): void;

    public stop(): void;
    public stop_deffered(): void;
  }

  /**
   * @group xr_sound
   */
  export type TXR_sound_object_type = EnumeratedStaticsValues<typeof sound_object>;

  /**
   * @source C++ class snd_type
   * @customConstructor snd_type
   * @group xr_sound
   */
  export class snd_type {
    public static ambient: 128;
    public static anomaly: 268435456;
    public static anomaly_idle: 268437504;
    public static attack: 8192;
    public static bullet_hit: 524288;
    public static die: 131072;
    public static drop: 33554432;
    public static eat: 4096;
    public static empty: 1048576;
    public static hide: 16777216;
    public static idle: 2048;
    public static injure: 65536;
    public static item: 1073741824;
    public static item_drop: 1107296256;
    public static item_hide: 1090519040;
    public static item_pick_up: 1140850688;
    public static item_take: 1082130432;
    public static item_use: 1077936128;
    public static monster: 536870912;
    public static monster_attack: 536879104;
    public static monster_die: 537001984;
    public static monster_eat: 536875008;
    public static monster_injure: 536936448;
    public static monster_step: 536903680;
    public static monster_talk: 536887296;
    public static no_sound: 0;
    public static object_break: 1024;
    public static object_collide: 512;
    public static object_explode: 256;
    public static pick_up: 67108864;
    public static reload: 262144;
    public static shoot: 2097152;
    public static step: 32768;
    public static take: 8388608;
    public static talk: 16384;
    public static use: 4194304;
    public static weapon: -2147483648;
    public static weapon_bullet_hit: -2146959360;
    public static weapon_empty: -2146435072;
    public static weapon_reload: -2147221504;
    public static weapon_shoot: -2145386496;
    public static world: 134217728;
    public static world_ambient: 134217856;
    public static world_object_break: 134218752;
    public static world_object_collide: 134218240;
    public static world_object_explode: 134217984;

    private constructor();
  }

  /**
   * @group xr_sound
   */
  export type TXR_snd_type = EnumeratedStaticsValues<typeof snd_type>;

  /**
   * @source C++ class SoundInfo
   * @customConstructor SoundInfo
   * @group xr_sound
   */
  export class SoundInfo {
    public danger: i32;
    public position: vector;
    public power: f32;
    public time: i32;
    public who: game_object;

    private constructor();
  }

  /**
   * @source C++ class sound_memory_object : game_memory_object
   * @customConstructor sound_memory_object
   * @group xr_sound
   */
  export class sound_memory_object extends game_memory_object {
    public readonly power: f32;
    public type(): i32;

    protected constructor();
  }
}
