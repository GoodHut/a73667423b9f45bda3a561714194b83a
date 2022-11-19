if (common.getlpparam().packageName == 'com.lonelycatgames.Xplore') {
  common.hookMethod('q8.h', 't', [], (param) =>
    param.setResult(java.lang.Integer.valueOf('5'))
  );
}
